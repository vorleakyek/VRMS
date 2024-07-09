class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;


    constructor() {
        this.templateElement = document.querySelector('#project-input')! as HTMLTemplateElement; 
        this.hostElement = document.querySelector('#app')! as HTMLDivElement; 

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach(); 
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }


}

// const prjInput = new ProjectInput();