import { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Submit } from './SearchBar.types';

const SearchBar = ({ onSubmit }: Submit) => {
  const [query, setQuery] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          onChange={handleInput}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
