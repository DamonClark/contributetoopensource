import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  labels: string = '';
  language: string = '';
  responseData: any;
  url: any;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private appService: AppService) {}

  groupedResults: { [repository_url: string]: any[] } = {};


  getGithubData() {
    this.url = 'https://api.github.com/search/issues?q=label:' + this.labels + '+no:assignee\
    +language:' + this.language +'+state:open&sort=created&order=desc&page=' + this.page + ''

    console.log(this.page)

    this.appService.getGitHubIssues(this.url).subscribe(data => {
      this.responseData = data;
      this.count = this.responseData.total_count;
      console.log(this.responseData)
      // Group search results by status
      this.groupedResults = this.responseData.items.reduce((result: any, item: any) => {
        const repository_url = item.repository_url;
        if (!result[repository_url]) {
          result[repository_url] = [];
        }
        result[repository_url].push(item);
        return result;
      }, {});
    });;
  };

  // getRequestParams(page: number, pageSize: number): any {
  //   // tslint:disable-next-line:prefer-const
  //   let params: any = {};

  //   if (page) {
  //     params[`page`] = page - 1;
  //   }

  //   if (pageSize) {
  //     params[`size`] = pageSize;
  //   }

  //   return params;
  // }


  handlePageChange(event: number): void {
    this.page = event;
    this.getGithubData();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getGithubData();
  }
}
