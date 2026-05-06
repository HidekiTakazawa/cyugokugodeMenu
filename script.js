// script.js
document.addEventListener("DOMContentLoaded", () => {
  // ----- ここから編集してください -----
  // 各アプリの情報を記述します。
  // id: HTML要素のID接頭辞として使用 (ユニークな文字列にしてください)
  // name: アプリの正式名称
  // description: アプリの簡単な紹介文
  // images: 表示する画像の配列。各画像は { src: "画像のパス", caption: "画像の説明文" } の形式です。
  //         画像パスは "images/ファイル名.png" のように指定します。
  // appUrl: アプリへジャンプするためのURL
  const appsData = [
    {
      id: "chinese-conversation-master", // 例: アプリ1のID
      name: "App①教科書の会話文",
      description:
        "各課の会話文が各ページに掲載されており、それぞれ音声の確認ができます。",
      images: [
        // { src: "images/honbunIni.jpg", caption: "初期表示画面：最初の学習内容が表示されます。" },
        {
          src: "images/会話初期画面.jpg",
          caption:
            "先頭のレッスンの内容が選択されています。学びたいレッスンを選択できます。中国語の文章をクリックすると中国語の音色が流れます。",
        },
        {
          src: "images/会話音声入力.jpg",
          caption:
            "PRACTICEボタンをクリックすると音声入力モードになります。例文を音声入力するとあなたの発音を評価してくれます。上部の音声入力練習記録をコピー　ボタンをキリックするとクリップボードに練習記録をコピーできます。",
        },

        // { src: "images/app1_screen3.png", caption: "テスト結果：間違えた単語を復習できます。" }
      ],
      appUrl: " https://hidekitakazawa.github.io/sinCyugokugoKaiwa/", // あなたのアプリ1への実際のURLに置き換えてください
    },

    {
      id: "newtango-trainer", // 例: アプリ2のID
      name: "App②新単語カード",

      description:
        "単語学習画面は、主に以下の3つのエリアに分かれています。上部メニュー: 「テストモードへ」の切り替え、レッスン選択、一覧表示。中央「カード」画面: 単語の学習エリア。下部メニュー: 「学習」「My帳」「検索」「登録」の主要機能。　このアプリは艾老师がAIと相談して作られました。",
      images: [
        {
          src: "images/新単語初期画面.jpg",
          caption:
            "初期画面　先頭のレッスンの日本語訳がカード形式で表示されます。カードの表を日本語訳にするか中国語にするかの選択もできます",
        },

        {
          src: "images/新単語一覧.jpg",
          caption:
            "一覧ボタンをクリックすれば、その課で学習する単語一覧が表示されます。個々の単語の右端に表示されている☆マークをクリックすればMy単語帳に登録できます",
        },
        {
          src: "images/新単語検索.jpg",
          caption:
            "検索ボタンをクリックすれば、すべてのレッスンの単語が研削できます。検索文字列が日本語、中国語、ピンインの一部と合致すれば表示されます。",
        },
        {
          src: "images/新単語my単語帳.jpg",
          caption:
            "下部メニューの「My帳」をクリックすれば、登録されているMy単語帳が表示されます。フラッシュカード形式と、一覧形式で表示できます。",
        },
      ],
      appUrl:
        "https://script.google.com/macros/s/AKfycbzhWKsAbKobQRmjK_r5K0cPDoVMYqq7M37L_f6hSux0caVrv1saY9lZa-2r_shnXN35Ug/exec", // あなたのアプリ2への実際のURLに置き換えてください
    },
    {
      id: "sentence-builder", // 例: アプリ3のID
      name: "App③練習問題（クイズ形式）",
      description:
        "教科書の練習問題に、ゲーム感覚で手軽に挑戦することができます。教科書に解答を書き込んだ後も復習が可能で、問題を解きながら楽しく語彙や文法を習得できます。",
      images: [
        {
          src: "images/rensyuSyoki.jpg",
          caption: "初期画面 最初の問題が表示されています。",
        },
        {
          src: "images/rensyuKaitou1.jpg",
          caption: "例えば'妈'を第一声だと選択すると...",
        },
        {
          src: "images/rensyuCheck1.jpg",
          caption:
            "解答が正しい場合は、「いいね！」というコメント付きで褒められます。",
        },
        {
          src: "images/rensyuKaitou2.jpg",
          caption: "例えば'妈'を第二声だと選択すると...",
        },
        {
          src: "images/rensyuCheck2.jpg",
          caption:
            "解答が正しくない場合は、「もっと頑張りましょう！！」と表示されます。",
        },
      ],
      appUrl:
        "https://script.google.com/macros/s/AKfycbwbjDVvdhtIqzWw3uZt2vn6CxSF8nypFV3tZ-xO-KI1dLxcvjX3LnjByWAgxkdVwj5Mew/exec", // あなたのアプリ3への実際のURLに置き換えてください
    },
    {
      id: "omakenochizuapp", // 例: アプリ4のID
      name: "App④中国地図",
      description:
        "中国大陸について学習するアプリです。中国各地の情報はAIから得ています。関連するyoutubeにジャンプする機能もあります。",
      images: [
        {
          src: "images/地図紹介画像１.jpg",
          caption:
            "アプリの初期画面です。いろいろな省の情報を見ることができます。",
        },
      ],
      appUrl:
        "https://script.google.com/macros/s/AKfycbye75vr_sq9t0qbGTN5fxnvWIl3v4vpQObWKv4rKMYOMQNGfkNU_DJ1lL266JgkaQji7w/exec", // あなたのアプリ4への実際のURLに置き換えてください
    },
    
    {
      id: "ziyouShuShuo", // 例: アプリ4のID
      name: "App⑤自由说中文",
      description:
        "気になる中国語の文章を正しく発音できるかチェックするアプリです。中国語文章を入力して、何回も発音を聞きましょう。その後、中国語の発音練習に進みます。自分の勉強の記録をクリップボードにコピーする機能もあります。",
      images: [
        {
          src: "images/自由说说初期画面.jpg",
          caption: "アプリの初期画面です。",
        },
        {
          src: "images/自由说说音声入力1.jpg",
          caption:
            "聞くボタンで、音声を聞きます。音声入力ボタンをクリックすると、入力モードになり、音声入力ができます。ボタンの背景色は赤に変わり、レコード中と表示されます。",
        },
        {
          src: "images/自由说说音声入力２.jpg",
          caption: "音声入力が終われば、判定結果が表示されます。",
        },
      ],
      appUrl: "https://hidekitakazawa.github.io/htCyonwenVoiceIn/",
    },
     {
      id: "sinQuiz", // 例: アプリ4のID
      name: "App⑥新練習問題",
      description:
        "練習問題（クイズ形式）の新しいプログラムです。改善点がいくつかあります。",
      images: [
        {
          src: "images/新クイズ初期画面.jpg",
          caption: "アプリの初期画面です。",
        },
        {
          src: "images/新クイズシート選択.jpg",
          caption:
            "学習したい課を選択できます。",
        },
        {
          src: "images/新クイズ評価.jpg",
          caption: "出された問題に対して回答を入力してチェックをクリックすれば、正解か誤りかを確認できます。",
        },
      ],
      appUrl: " https://hidekitakazawa.github.io/chuanZhonwenQuiz/",
    },
  ];
  // ----- ここまで編集してください -----

  const appListContainer = document.getElementById("app-list-container");
  if (!appListContainer) {
    console.error(
      'Error: App list container (id="app-list-container") not found in HTML.',
    );
    return;
  }

  appsData.forEach((appData) => {
    const showcaseItem = createAppShowcaseElement(appData);
    appListContainer.appendChild(showcaseItem);
  });

  function createAppShowcaseElement(appData) {
    const item = document.createElement("div");
    item.className = "app-showcase-item";
    item.id = `${appData.id}-showcase`;

    const nameElement = document.createElement("h2");
    nameElement.className = "app-name";
    nameElement.textContent = appData.name;
    item.appendChild(nameElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "app-description";
    descriptionElement.textContent = appData.description;
    item.appendChild(descriptionElement);

    const sliderElement = document.createElement("div");
    sliderElement.className = "image-slider";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const imageElement = document.createElement("img");
    imageElement.className = "slider-image";
    imageElement.alt = `${appData.name} screenshot`; // 初期alt
    imageContainer.appendChild(imageElement);
    sliderElement.appendChild(imageContainer);

    const captionElement = document.createElement("p");
    captionElement.className = "image-caption";
    sliderElement.appendChild(captionElement);

    const controlsElement = document.createElement("div");
    controlsElement.className = "slider-controls";
    const prevButton = document.createElement("button");
    prevButton.className = "prev-btn";
    prevButton.textContent = "◀ Back";
    const nextButton = document.createElement("button");
    nextButton.className = "next-btn";
    nextButton.textContent = "Next ▶";
    controlsElement.appendChild(prevButton);
    controlsElement.appendChild(nextButton);
    sliderElement.appendChild(controlsElement);

    item.appendChild(sliderElement);

    const linkElement = document.createElement("a");
    linkElement.className = "app-link";
    // linkElement.href = appData.appUrl;
    linkElement.textContent = `「${appData.name}」へ`;
    // linkElement.target = '_blank'; // 新しいタブで開く
    // linkElement.rel = 'noopener noreferrer'; // セキュリティ対策
    // iPhoneでの動作を考慮し、クリックイベントで window.open を使用
    linkElement.addEventListener("click", (event) => {
      event.preventDefault(); // aタグのデフォルトの遷移を防ぎます

      // window.open() を使用して新しいタブで開く
      // 'noopener,noreferrer' はセキュリティ上の推奨事項です
      const newWindow = window.open(
        appData.appUrl,
        "_blank",
        "noopener,noreferrer",
      );

      // ポップアップがブロックされた場合のフォールバック（任意）
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        // ユーザーに通知するか、同じウィンドウで開くなどの代替手段を検討
        // alert('新しいタブを開けませんでした。ポップアップブロックの設定を確認してください。\nまたは、以下のURLを直接ブラウザで開いてください：\n' + appData.appUrl);
        // もしポップアップブロックで開けない場合、同じタブで開くことを試みる
        // window.location.href = appData.appUrl;
      }
    });
    item.appendChild(linkElement);

    // スライダーの状態とロジック
    let currentImageIndex = 0;

    function updateSliderDisplay() {
      if (!appData.images || appData.images.length === 0) {
        imageContainer.innerHTML =
          '<p style="padding: 20px; color: #777;">このアプリの画像はまだありません。</p>';
        captionElement.textContent = "";
        prevButton.style.display = "none"; // 画像がない場合はボタンも非表示
        nextButton.style.display = "none";
        return;
      }

      imageElement.style.display = "block"; // 画像がある場合は表示
      prevButton.style.display = "inline-block";
      nextButton.style.display = "inline-block";

      const currentImage = appData.images[currentImageIndex];
      imageElement.src = currentImage.src;
      imageElement.alt =
        currentImage.caption ||
        `${appData.name} screen ${currentImageIndex + 1}`;
      captionElement.textContent = currentImage.caption || "";

      prevButton.disabled = currentImageIndex === 0;
      nextButton.disabled = currentImageIndex === appData.images.length - 1;
    }

    prevButton.addEventListener("click", () => {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateSliderDisplay();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentImageIndex < appData.images.length - 1) {
        currentImageIndex++;
        updateSliderDisplay();
      }
    });

    // スワイプ機能
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // スワイプと判定する最小距離 (px)

    imageContainer.addEventListener(
      "touchstart",
      (e) => {
        if (!appData.images || appData.images.length <= 1) return;
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    imageContainer.addEventListener("touchend", (e) => {
      if (!appData.images || appData.images.length <= 1) return;
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) >= swipeThreshold) {
        if (swipeDistance < 0) {
          // 左スワイプ (Next)
          if (currentImageIndex < appData.images.length - 1) {
            currentImageIndex++;
          }
        } else {
          // 右スワイプ (Back)
          if (currentImageIndex > 0) {
            currentImageIndex--;
          }
        }
        updateSliderDisplay();
      }
    }

    updateSliderDisplay(); // 初期表示
    return item;
  }
});
