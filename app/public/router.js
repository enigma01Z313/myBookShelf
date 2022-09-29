const path = require("path");
const express = require("express");
const router = express.Router();
const { books } = require("./staticDb");

router.get("/books/", (req, res) => {
  res.render("pages/books/index", { books });
});

router.get("/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const { title, chapters } = books.find((item) => item.id === bookId);

  res.render("pages/books/archive", { bookId, title, chapters });
});

router.get("/books/:bookId/:chapterId", (req, res) => {
  const { bookId, chapterId } = req.params;
  let curIndex, prevChapter, nexChapter;

  const { title: bookTitle, chapters } = books.find(
    (item) => item.id === bookId
  );
  const { title, content } = chapters.find((chapter, i) => {
    curIndex = i;
    return chapter.id === chapterId;
  });

  nexChapter = curIndex < chapters.length - 1 ? curIndex + 1 : undefined;
  prevChapter = curIndex > 0 ? curIndex - 1 : undefined;

  nexChapter = typeof nexChapter !== typeof undefined && {
    id: chapters[nexChapter].id,
    title: chapters[nexChapter].title,
  };
  prevChapter = typeof prevChapter !== typeof undefined && {
    id: chapters[prevChapter].id,
    title: chapters[prevChapter].title,
  };

  res.render("pages/books/single", {
    title,
    content,
    book: { id: bookId, title: bookTitle },
    chapterNav: { next: nexChapter, prev: prevChapter },
  });
});

router.get("/*", (req, res, next) => {
  const { url: requstedUrl } = req;
  // console.log(requstedUrl);

  if (requstedUrl.includes("robots.txt")) return res.end("robots.txt");

  if (requstedUrl.includes("assets"))
    return res.sendFile(
      path.join(
        path.resolve("./"),
        "app/public",
        requstedUrl.match(/\assets(.*)/)[0]
      )
    );

  //general pages handles
  if (requstedUrl[requstedUrl.length - 1] === "/")
    return res.render(`pages${requstedUrl}index`);

  return res.render(`pages${requstedUrl}`);
});

module.exports = router;
