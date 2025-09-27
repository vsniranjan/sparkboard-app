import IdeasApi from "../services/ideasApi";
import IdeaList from "./IdeaList";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this._ideaList = new IdeaList();
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  render() {
    this._formModal.innerHTML = `
      <form id="idea-form">
            <div class="form-control">
              <label for="idea-text">Enter a Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div class="form-control">
              <label for="idea-text">What's Your Idea?</label>
              <textarea name="text" id="idea-text"></textarea>
            </div>
            <div class="form-control">
              <label for="tag">Tag</label>
              <input type="text" name="tag" id="tag" />
            </div>
            <button class="btn" type="submit" id="submit">Submit</button>
      </form>`;

    // Adding event listeners only possible after rendering the idea-form
    // Hence why it cant be put inside the constructor and onl after setting
    // the innerHTML and redering it
    this._form = document.querySelector("#idea-form");
    this.addEventListeners();
  }

  async handleSubmit(event) {
    event.preventDefault();

    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    // Add idea to database
    const newIdea = await IdeasApi.createIdea(idea);

    // Add idea to IdeaList
    this._ideaList.addIdeaToList(newIdea.data.data);

    // Clearing Fields
    this._form.elements.text.value = "";
    this._form.elements.tag.value = "";
    this._form.elements.username.value = "";

    // Displatching event to close the modal to Modal.js
    document.dispatchEvent(new Event("closemodal"));
  }
}

export default IdeaForm;
