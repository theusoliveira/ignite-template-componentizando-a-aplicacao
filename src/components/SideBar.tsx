import { Button } from './Button';

import '../styles/sidebar.scss';

import { GenreResponseProps } from '../App';

interface SidebarProps {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar(props: SidebarProps) {
  const { genres, selectedGenreId, handleClickButton } = props;

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}