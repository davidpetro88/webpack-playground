import Dog from '../img/dog.jpeg';

class Image {
    insertDogImage() {
        const img = document.createElement('img');
        img.src = Dog;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;
