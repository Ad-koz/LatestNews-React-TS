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


// 1. Stworz komponent SearchFrom.
// 2. Zaimportuj i wywołaj useForm
// 3. Stwórz interface do useForm, będzie tylko 1 input nazwany keyword, otypuj na string
// 4. W propsie przyjmij funkcję setKeyword, będzie to funkcja aktulizująca stan przyjmująca stringa. Pamiętaj i interfejsie do propsów.
// 5. Stwórz funkcję updateKeyword, funkcja przyjmuje obiekt data, wykorzystaj interface z pkt 3. W tej funkcji wywołuj funkcję setKeyword, stawiając do niej keyword z formularza.
// 6. JSX:
// - wszystko obwinięte tagiem form, skonfiguruj onSubmit, w style: display flex, flexDirectionColumn
// - TextField (MUI) placeholder keyword, sx: my .5rem, display block, mx auto. Zarejestruj pod nazwą keyword
// - Button (MUI) variant contained, type submit, sx: display block, mx auto
// (val: string) => void