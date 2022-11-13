import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;
  
  editorLoaded(event:any) { 
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data:any) => console.log('exportHtml', data));
  }
}
