import "../style/footer.css";

export const addFooterContents = function () {
  document.querySelector("footer").innerHTML = `
    <div class="app__footer_container">
        <p>Copyright 2023 Ability Tester</p>
        <a href="#">mzcompany.corp@gmail.com</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Licensing</a>
    </div>
`;
};
