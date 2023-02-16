import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

interface SearchFormValues {
  keyword: string;
}

interface SearchFormProps {
  setKeyword: (val: string) => void;
}

const SearchForm = ({ setKeyword }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  const updateKeyword = (data: SearchFormValues) => {
    setKeyword(data.keyword);
  };

  return (
    <form
      onSubmit={handleSubmit(updateKeyword)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        placeholder="keyword"
        sx={{ my: ".5rem", display: "block", mx: "auto" }}
        {...register("keyword", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;

