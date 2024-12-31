import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    states = [
        {
          id: 1,
          name: "Kerala",
          image: "kerala.jpeg",
          description: "God's Own Country",
        },
        {
          id: 2,
          name: "Tamil Nadu",
          image: "tamil.jpeg",
          description: "Land of Temples",
        },
        {
          id: 3,
          name: "Karnataka",
          image: "karnataka.jpeg",
          description: "One State, Many Worlds",
        },
        {
          id: 4,
          name: "Andhra Pradesh",
          image: "Andhra.jpeg",
          description: "The Koh-i-Noor of India",
        },
        {
          id: 5,
          name: "Telangana",
          image: "teleghana.jpeg",
          description: "The Youngest State of India",
        },
        {
          id: 6,
          name: "Maharashtra",
          image: "maharstra.jpeg",
          description: "Land of Marathas",
        },
        {
          id: 7,
          name: "Goa",
          image: "goa.jpeg",
          description: "Pearl of the Orient",
        },
        {
          id: 8,
          name: "Gujarat",
          image: "gujarat.jpeg",
          description: "The Land of Legends",
        },
        {
          id: 9,
          name: "Rajasthan",
          image: "raja.jpeg",
          description: "The Land of Kings",
        },
        {
          id: 10,
          name: "Punjab",
          image: "punjab.jpeg",
          description: "Land of Five Rivers",
        },
        {
          id: 11,
          name: "Haryana",
          image: "harayana.jpeg",
          description: "The Home of Gods",
        },
        {
          id: 12,
          name: "Uttar Pradesh",
          image: "up.jpeg",
          description: "Heartland of India",
        },
        {
          id: 13,
          name: "Bihar",
          image: "bihar.jpeg",
          description: "Land of Monasteries",
        },
        {
          id: 14,
          name: "West Bengal",
          image: "wbjpeg.jpeg",
          description: "Cultural Capital of India",
        },
        {
          id: 15,
          name: "Jharkhand",
          image: "jharkhand.jpeg",
          description: "Land of Forests",
        },
        {
          id: 16,
          name: "Odisha",
          image: "od.jpeg",
          description: "The Soul of India",
        },
        {
          id: 17,
          name: "Assam",
          image: "assam.jpeg",
          description: "Gateway to Northeast India",
        },
        {
          id: 18,
          name: "Arunachal Pradesh",
          image: "Ap.jpeg",
          description: "Land of Dawn-lit Mountains",
        },
        {
          id: 19,
          name: "Nagaland",
          image: "nagaland.jpeg",
          description: "Land of Festivals",
        },
        {
          id: 20,
          name: "Manipur",
          image: "manipur.jpeg",
          description: "Jewel of India",
        },
        {
          id: 21,
          name: "Mizoram",
          image: "mizoram.jpeg",
          description: "Land of the Hill People",
        },
        {
          id: 22,
          name: "Tripura",
          image: "tripura.jpeg",
          description: "The Land of Stories",
        },
        {
          id: 23,
          name: "Meghalaya",
          image: "meghalaya.jpeg",
          description: "Abode of Clouds",
        },
        {
          id: 24,
          name: "Sikkim",
          image: "sikkim.jpeg",
          description: "The Mountain Kingdom",
        },
        {
          id: 25,
          name: "Himachal Pradesh",
          image: "himachal.jpeg",
          description: "Land of Snow",
        },
        {
          id: 26,
          name: "Uttarakhand",
          image: "utkand.jpeg",
          description: "Devbhoomi (Land of Gods)",
        },
        {
          id: 27,
          name: "Chhattisgarh",
          image: "ap1.jpeg",
          description: "The Rice Bowl of India",
        },
        {
          id: 28,
          name: "Madhya Pradesh",
          image: "mp.jpeg",
          description: "The Heart of India",
        }
        ]

  constructor() { }

getStates(){
  return this.states;
}

getStateByID(id:any){
  return this.states.find(state => state.id == id);
}


}