import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-random-repo',
  templateUrl: './random-repo.component.html',
  styleUrls: ['./random-repo.component.css']
})
export class RandomRepoComponent implements OnInit {

  public repository: any;

  constructor(private github: GithubApiService) { }

  ngOnInit() {
    this.findRandomRepo();
  }

  private findRandomRepo() {
    this.github.getRandomRepo().subscribe(repo => {
      this.repository = repo;
    });
  }

  navigateToRepo() {
    window.open(this.repository.html_url, '_blank');
  }

  regenerate() {
    this.findRandomRepo();
  }

}
