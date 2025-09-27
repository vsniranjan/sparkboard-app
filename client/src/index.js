import "./css/style.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";

new Modal();
new IdeaList();
const ideaForm = new IdeaForm();
ideaForm.render();
