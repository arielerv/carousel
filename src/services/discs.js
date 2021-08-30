const discsService = {
  // Api response api
  getDiscs: () => ({
    success: true,
    discs: [
      {
        title: 'Crispian st Peters',
        image:
          'https://img.discogs.com/VaZ1lGJaVUKtB7af8NkFm572BXQ=/fit-in/600x589/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-2914511-1307049550.jpeg.jpg',
      },
      {
        title: 'Juice Newton',
        image:
          'https://img.discogs.com/zUTuP-LTHo0UnZdjrat5EkHpopU=/fit-in/600x578/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-741288-1266523867.jpeg.jpg',
      },
      {
        title: 'the police',
        image:
          'https://cdn.slidesharecdn.com/ss_thumbnails/thepolice-140521140504-phpapp02-thumbnail-4.jpg?cb=1400681162',
      },
    ],
  }),
};

export default discsService;
