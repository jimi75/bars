import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bars = [
      { 
        id: 1,
        title: 'Kentucky',
        content: 'Great Bar!',
        lat: '41.377698',
        long: '2.174693',
        image_url: 'http://placezombie.com/245x245'
      },
      { 
        id: 2,
        title: 'Marsella',
        content: 'Full of güiris',
        lat: '41.3782442',
        long: '2.1711996',
        image_url: 'http://placezombie.com/255x255'
      },
      { 
        id: 3,
        title: 'Dry Martini',
        content: 'So expensive!',
        lat: '41.3927591',
        long: '2.1540928',
        image_url: 'http://placezombie.com/265x265'
      },
      { 
        id: 4,
        title: 'Boadas',
        content: 'Maybe the best one!',
        lat: '41.3846648',
        long: '2.1702702',
        image_url: 'http://placezombie.com/275x275' 
      }
    ];
    return {bars};
  }
}