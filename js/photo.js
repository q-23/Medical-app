export default function (imageUrl) {
    return `
        <div class="col-4 image-div-container">
            <div class="image-div">
                <img src="${imageUrl}" alt="responsive image"/>
            </div>
        </div>
    `;
}