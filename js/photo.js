export default function (imageUrl, index) {
    const returnLgIndex = index => {
        const order = index + 1;

        if (order === 1 ||
            order === 2 ||
            order === 3 ||
            (order - 1) % 7 === 0 ||
            (order - 2) % 7 === 0 ||
            (order - 3) % 7 === 0) {
            return 4
        } else return 3
    }

    return `
        <div class="col-xs-12 col-sm-6 col-lg-${returnLgIndex(index)} image-div-container">
            <div class="image-div">
                <img src="${imageUrl}" alt="responsive image"/>
            </div>
        </div>
    `;
};
