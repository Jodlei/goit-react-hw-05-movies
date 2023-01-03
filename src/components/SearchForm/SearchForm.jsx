import { Form, Icon, Input, SubmitButton } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <label htmlFor="query">
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </label>

      <SubmitButton>
        <Icon />
      </SubmitButton>
    </Form>
  );
};
