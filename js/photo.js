const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const photoChooser = document.querySelector('#images');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoPreview = document.querySelector('.ad-form__photo img');

const choosePicture = (chooser, preview) => {
  chooser.addEventListener('change', () => {
    const file = chooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

const createPicturesPreview = () => {
  choosePicture(avatarChooser, avatarPreview);
  choosePicture(photoChooser, photoPreview);
};

export { createPicturesPreview };
