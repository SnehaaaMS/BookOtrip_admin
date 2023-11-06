import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-templates-create', 
  templateUrl: './templates-create.component.html',
  styleUrls: ['./templates-create.component.scss']
})
export class TemplatesCreateComponent {

  options = {};
  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  editorLoaded() {
    console.log('editorLoaded');
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  editorReady() {
    console.log('editorReady');
  }

  saveDesign() {
    this.emailEditor.editor.saveDesign((data) =>
      console.log('saveDesign', data)
    );
  }


  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }
}
