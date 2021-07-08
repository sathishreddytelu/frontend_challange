import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
   bidId:any;
  selectedData:any;
  tableData=[{id:"a0123",image:"assets/images/cars/car1.jpg",name:"Tayota",type:"Car",model:"Yaris",make:'2016',location:"GA-MACON",currentbid:'0.12',lastdate:'15/07/2021',damage:'Back',bidsCount:"125"},
      {id:"a0124",image:"assets/images/cars/car2.jpg",name:"Tayota",type:"Car",model:"Hyryder",make:'2018',location:"TX-HOUSTON",currentbid:'$700 USD',lastdate:'25/07/2021',damage:'Side',bidsCount:"12"},
      {id:"a0125",image:"assets/images/cars/car4.jpg",name:"Golf",type:"Car",model:"CLUB CAR",make:'2020',location:"AL-MONTGOMERY",currentbid:'$150 USD',lastdate:'18/07/2021',damage:'Back',bidsCount:"5"},
      {id:"a0126",image:"assets/images/cars/car5.jpg",name:"LINCOLN",type:"Car",model:"TOWN CAR",make:'2010',location:"MN-MINNEAPOLIS",currentbid:'$260 USD',lastdate:'15/07/2021',damage:'Back',bidsCount:"63"},
      {id:"a0127",image:"assets/images/cars/car6.jpg",name:"Ford",type:"Car",model:"CAR UK",make:'1956',location:"TN-KNOXVILLE",currentbid:'$200 USD',lastdate:'15/07/2021',damage:'Mirror',bidsCount:"99"},
      {id:"a0128",image:"assets/images/cars/car7.jpg",name:"TRIUMPH CAR",type:"Car",model:"TR6",make:'2011',location:"MI-KINCHELOE",currentbid:'$500 USD',lastdate:'25/07/2021',damage:'Front',bidsCount:"64"},
      {id:"a0129",image:"assets/images/cars/car8.jpg",name:"Lincoln",type:"Car",model:"Town car",make:'2020',location:"MO-ST.LOUIS",currentbid:'$100 USD',lastdate:'18/07/2021',damage:'Back',bidsCount:"80"},
      {id:"a0130",image:"assets/images/cars/car9.jpg",name:"Tayota",type:"Car",model:"SIENNA CAR",make:'2019',location:"KY-LEXINGTON EAST",currentbid:'$900 USD',lastdate:'15/07/2021',damage:'Right Door',bidsCount:"17"},
      {id:"a0131",image:"assets/images/cars/car10.jpg",name:"LINCOLN",type:"Car",model:"Towncar",make:'2016',location:"NC-LUMBERTON",currentbid:'$160 USD',lastdate:'15/07/2021',damage:'Left Door',bidsCount:"10"},
      {id:"a0132",image:"assets/images/cars/car11.jpg",name:"Ford",type:"Car",model:"CT6",make:'2014',location:"MI-DETROIT",currentbid:'$200 USD',lastdate:'25/07/2021',damage:'Back',bidsCount:"4"},
      {id:"a0133",image:"assets/images/cars/car12.jpg",name:"LINCOLN",type:"Car",model:"Ghost",make:'2010',location:"AL-MONTGOMERY",currentbid:'$800 USD',lastdate:'18/07/2021',damage:'Back',bidsCount:"35"},
    ]

  ngOnInit(): void {
    this.route.queryParams.subscribe(res=>{
      this.bidId=res.id;
      this.tableData.forEach(e=>{
        if(e.id==this.bidId){
          this.selectedData=e
        }
      })
    })

  }

}
