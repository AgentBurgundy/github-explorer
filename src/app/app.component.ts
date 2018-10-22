import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-explore';

  navigateToSource() {
    window.open('https://github.com/AgentBurgundy/github-explorer', '_blank');
  }
}
