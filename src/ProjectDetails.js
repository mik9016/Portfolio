export class ProjectDetails {
  constructor() {
    this.readMoreBtn = document.getElementById("buggyBtn");
    this.displayvalue = {
      display: "none",
    };
    this.projectDetailsSections = document.getElementById("projectDetails");
    this.projectDetailsSections.style.display = this.displayvalue.display;
    this.readMoreBtn.addEventListener(
      "click",
      this.showProjectDetails.bind(this)
    );
  }

  showProjectDetails() {
    if (this.projectDetailsSections.style.display === "none") {
      this.projectDetailsSections.style.display = "inherit";
    } else {
      this.projectDetailsSections.style.display = "none";
    }
  }
}
