// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
    // サムネとメイン画像の容れ物を定義（サムネ：コレクション，メイン：変数）
    // HTMLからタグを指定して代入
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo > img");
    let currentClass = "current";
    // 更新される画像情報の容れ物を定義
    let galleryInfo = document.querySelector("#gallery-info");
    let title = galleryInfo.querySelector(".title");
    let description = galleryInfo.querySelector(".description");

    // サムネがクリックされるのを待つようにforEach，EventListener
    thumbnails.forEach(function (thumbnail) {
        // 大画像をプリロードする
        let newImageSrc = thumbnail.dataset.largeVersion;
        let largeVersion = new Image(); //Imageオブジェクトを作り
        largeVersion.src = newImageSrc; //ここで初めてプリロードが始まる

        thumbnail.addEventListener("click", function () {
            // クリックされたサムネ画像を新しいメイン画像として定義，メイン画像をセット
            mainImage.setAttribute("src", largeVersion.src);
            mainImage.setAttribute("alt", thumbnail.alt);

            // クリックされた画像を選択中の画像として表示（オレンジ枠をつける）
            document.querySelector(".current").classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            // innerHTMLプロパティで更新
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}