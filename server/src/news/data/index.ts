export interface INews {
  date: Date;
  title: string;
  description: string;
  image: string;
  author: string;
  id: number;
}

export const movieNewsData: INews[] = [
  {
    date: new Date(),
    title: 'Upcoming Blockbuster: The Return of the Superheroes',
    description:
      'Get ready for the much-awaited return of your favorite superheroes as they assemble once again to save the world!',
    image: 'superhero-movie.jpg',
    author: 'Film Buff',
    id: 1,
  },
  {
    date: new Date(),
    title: 'A Journey Through Time: The Evolution of Sci-Fi Films',
    description:
      'Explore the evolution of science fiction films over the decades, from classic space adventures to mind-bending futuristic tales.',
    image: 'sci-fi-movies.jpg',
    author: 'Cinema Enthusiast',
    id: 2,
  },
  {
    date: new Date(),
    title: 'Classic Rewind: Rediscovering the Golden Era of Hollywood',
    description:
      'Take a trip down memory lane and revisit the timeless classics that defined the golden era of Hollywood.',
    image: 'hollywood-classics.jpg',
    author: 'Vintage Movie Lover',
    id: 3,
  },
  {
    date: new Date(),
    title: 'Behind the Scenes: The Making of a Blockbuster',
    description:
      'Discover the fascinating behind-the-scenes stories and challenges faced during the production of a blockbuster movie.',
    image: 'behind-the-scenes.jpg',
    author: 'Film Production Insider',
    id: 4,
  },
  {
    date: new Date(),
    title: 'Breaking Barriers: Diversity and Representation in Cinema',
    description:
      'Explore the evolving landscape of diversity and representation in cinema, as filmmakers strive to tell more inclusive stories.',
    image: 'diversity-in-cinema.jpg',
    author: 'Inclusive Filmmaker',
    id: 5,
  },
  {
    date: new Date(),
    title: 'Iconic Directors: Masters of the Silver Screen',
    description:
      'Celebrate the visionary directors who have left an indelible mark on the silver screen with their unique storytelling and cinematic style.',
    image: 'iconic-directors.jpg',
    author: 'Cinephile Critic',
    id: 6,
  },
  {
    date: new Date(),
    title: 'The Art of Animation: Exploring the Magic of Animated Films',
    description:
      'Dive into the enchanting world of animation and discover the magic behind some of the most beloved animated films of all time.',
    image: 'animated-films.jpg',
    author: 'Animation Enthusiast',
    id: 7,
  },
  {
    date: new Date(),
    title: 'Cinematic Soundscapes: The Importance of Film Scores',
    description:
      'Delve into the world of film scores and learn how music enhances the cinematic experience, from creating suspense to evoking emotion.',
    image: 'film-scores.jpg',
    author: 'Music Maestro',
    id: 8,
  },
  {
    date: new Date(),
    title: 'The Rise of Independent Cinema: Breaking Away from the Mainstream',
    description:
      'Discover the rise of independent cinema and its impact on the industry, as filmmakers push boundaries and challenge conventions.',
    image: 'independent-cinema.jpg',
    author: 'Indie Filmmaker',
    id: 9,
  },
  {
    date: new Date(),
    title: 'Movie Magic: Exploring Special Effects in Hollywood',
    description:
      'Uncover the secrets of movie magic as we take a closer look at the groundbreaking special effects that have dazzled audiences for decades.',
    image: 'special-effects.jpg',
    author: 'Visual Effects Wizard',
    id: 10,
  },
];
