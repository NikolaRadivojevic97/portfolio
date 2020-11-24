import { Injectable } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';
import { Project } from './project.model';

@Injectable()
export class ProjectsService{
    projekti=[
      new Project("Seats covers web shop",['PHP','HTML','CSS','JavaScript','TypeScript'],"This application represents e-commerce that offers huge varieties of seats covers where customer can customize their covers and order them. Application provides authentication, where registered users can track their orders. There's also option for admins to add new cars, color combinations and change them. Application has search option that makes it easier for users to navigate on products page.It is created using bunch of different technologies including frameworks like Angular, Symphony and API Platform, libraries like CanvasJS and Material and mySQL as data base management system.Project follows MVC pattern.","https://github.com/NikolaRadivojevic97/TradcijaWebStore",
      [new Image(0,
       { // modal
        img: '../../assets/images/tradicija/2.png',
           description: 'Home page'

       }), new Image(1,
         { // modal
          img: '../../assets/images/tradicija/1.png',
          description: 'Shop'
         }),
           new Image(2,
             { // modal
               img: '../../assets/images/tradicija/4.png',
               description: 'Product'
             }),
             new Image(3,
               { // modal
                 img: '../../assets/images/tradicija/5.png',
                 description: 'Chosen combination'
               }),
               new Image(4,
                 { // modal
                   img: '../../assets/images/tradicija/6.png',
                   description: 'Chopping cart'
                 }),
                 new Image(5,
                   { // modal
                     img: '../../assets/images/tradicija/7.png',
                     description: 'Checkout form'
                   }),
                   new Image(6,
                     { // modal
                       img: '../../assets/images/tradicija/8.png',
                       description: 'Payment method'
                     }),
                     new Image(7,
                      { // modal
                        img: '../../assets/images/tradicija/9.png',
                        description: 'Registraton'
                      }),
                      new Image(8,
                        { // modal
                          img: '../../assets/images/tradicija/10.png',
                          description: 'Order overeview'
                        }),
                        new Image(9,
                          { // modal
                            img: '../../assets/images/tradicija/11.png',
                            description: 'Admin panel'
                          }),
                          new Image(10,
                            { // modal
                              img: '../../assets/images/tradicija/12.png',
                              description: 'Admin orders overview'
                            }),
                            new Image(11,
                              { // modal
                                img: '../../assets/images/tradicija/13.png',
                                description: 'Adding new combination'
                              }),
                              new Image(12,
                                { // modal
                                  img: '../../assets/images/tradicija/14.png',
                                  description: 'Adding new car'
                                }),
                                new Image(13,
                                  { // modal
                                    img: '../../assets/images/tradicija/15.png',
                                    description: 'Adding new cover'
                                  })
     ],['Symfony',"Angular", "API Platform"],"MySQL",["Material","CanvasJS","Bootstrap"],"../../assets/images/tradicija/2.png"),
      new Project("Sensors data visualizaton",['HTML','CSS','JavaScript','TypeScript','Python','C++'],"This application provides graphical representation of data which is gathered through sensors and OpenWeatherMap API. This includes data about temperature, air humidity, brightness and smoke density. Data is measured through time and represented as lowest, average and highest value for all 4 measured factors. Devices used for getting data from sensors are arduino and raspberryPi, while grafana is used for creating graphs. Application is realised in python and c++.","https://github.com/NikolaRadivojevic97/RaspberryPiDataVisualization",[new Image(0,
       { // modal
         img: '../../assets/images/dataVisualization/1.png',
         description: 'Devices and sensors'
       }), new Image(1,
         { // modal
           img: '../../assets/images/dataVisualization/2.png',
           description: 'Home page'
         }),
         new Image(2,
           { // modal
             img: '../../assets/images/dataVisualization/3.png',
             description: 'Real-time graphs of sensor values'
           }),
           new Image(3,
             { // modal
               img: '../../assets/images/dataVisualization/4.png',
               description: 'Sensor values in table view'
             }),
             new Image(6,
               { // modal
                 img: '../../assets/images/dataVisualization/5.png',
                 description: 'Temperature '
               }),
               new Image(7,
                 { // modal
                   img: '../../assets/images/dataVisualization/6.png',
                   description: 'Temperature form sensor and openweather'
                 }),
                 new Image(8,
                   { // modal
                     img: '../../assets/images/dataVisualization/7.png',
                     description: 'Humidity'
                   }),
                   new Image(9,
                     { // modal
                       img: '../../assets/images/dataVisualization/8.png',
                       description: 'Smoke'
                     }),
                     new Image(10,
                      { // modal
                        img: '../../assets/images/dataVisualization/9.png',
                        description: 'Brightness'
                      })
     ],["Angular",'Flask'],"Influxdb",["Bootstrap"],"../../assets/images/dataVisualization/2.png"),
     new Project("Fit&Sit",['HTML','SCSS',"JavaScript","TypeScript"],"PWA(progressive web application) made using Angular and Ionic framework. It gives users preview of all the existing recepies as well as possibility to add new recepies, edit and delete their own recepies, add ingredients to their own shopping list and also to get their own calories goals and to track them. Application also allows access to Camera, which is accomplished using Capacitor plugin. Application offers connection to database,which is accomplished using firebase. This project is realised as collaboration of two people."
        ,"https://github.com/NikolaRadivojevic97/eatApp",[new Image(0,
          { // modal
            img: '../../assets/images/ionicApp/1.png',
            description: 'Signup/Login page'
          }), new Image(1,
            { // modal
              img: '../../assets/images/ionicApp/2.png',
              description: 'All recepies'
            }),
            new Image(2,
              { // modal
                img: '../../assets/images/ionicApp/3.png',
                description: 'Sweets'
              }),
              new Image(3,
                { // modal
                  img: '../../assets/images/ionicApp/4.png',
                  description: 'My recepies'
                }),
                new Image(6,
                  { // modal
                    img: '../../assets/images/ionicApp/5.png',
                    description: 'New recepie'
                  }),
                  new Image(7,
                    { // modal
                      img: '../../assets/images/ionicApp/6.png',
                      description: 'Hamburger'
                    }),
                    new Image(8,
                      { // modal
                        img: '../../assets/images/ionicApp/7.png',
                        description: 'Hamburger ingredients'
                      }),
                      new Image(9,
                        { // modal
                          img: '../../assets/images/ionicApp/8.png',
                          description: 'Adding ingredient to shopping list'
                        }),
                        new Image(10,
                          { // modal
                            img: '../../assets/images/ionicApp/9.png',
                            description: 'Preparation process'
                          }),
                          new Image(11,
                            { // modal
                              img: '../../assets/images/ionicApp/10.png',
                              description: 'Shopping list'
                            }),
                            new Image(12,
                              { // modal
                                img: '../../assets/images/ionicApp/11.png',
                                description: 'Calories overview'
                              })
        ],["Angular, Ionic"],"Firebase",["Bootstrap"],"../../assets/images/ionicApp/url1.png"),


       new Project("Mobile shop(Android version)",['Java','PHP'],"This application represents mobile version of mobile shop application listed here. Application offers authentication, as well as possibilities to add new phones, new packages and new contracts for admins, and also options to view those phones, packages and contracts for non-admin users. Registered users can also buy phones. There is search option which offers users option to find phones by name, price, ram memory and camera resolution. Application was realised using android studio and java programming language, and was made as collaboration of three people.","https://github.com/LukaS70/Elektronska-Prodavnica",[new Image(0,
         { // modal
           img: '../../assets/images/mobileShop/1.png',
           description: 'Home page'
         }), new Image(1,
           { // modal
             img: '../../assets/images/mobileShop/2.png',
             description: 'Shop'
           }),
           new Image(2,
             { // modal
               img: '../../assets/images/mobileshop/3.png',
               description: 'Side menu'
             }),
             new Image(3,
               { // modal
                 img: '../../assets/images/mobileshop/4.png',
                 description: 'Login'
               }),
               new Image(6,
                 { // modal
                   img: '../../assets/images/mobileshop/5.png',
                   description: 'Mobile phone specification'
                 }),
                 new Image(7,
                   { // modal
                     img: '../../assets/images/mobileshop/6.png',
                     description: 'Mobile phone search'
                   }),
                   new Image(8,
                     { // modal
                       img: '../../assets/images/mobileshop/7.png',
                       description: 'Contracts overview'
                     }),
                     new Image(9,
                       { // modal
                         img: '../../assets/images/mobileshop/8.png',
                         description: 'Adding new phone'
                       })
       ],[],"MySQL",[],"../../assets/images/mobileshop/url.png"),
     new Project("Football Club",['Java'],"Application is realised as Three-tiered client server application. Application handle work with muliple clients by using web socets and threads. Application provides work with database.E.g. Users can add/delete/update and search players or matches and save them to database with MySQL used as relational database management system. Application follow principles of clean code and design patterns.","https://github.com/NikolaRadivojevic97/footballClub",[new Image(0,
       { // modal
         img: '../../assets/images/footballClub/1.jpg',
         description: 'Login page'
       }), new Image(1,
         { // modal
           img: '../../assets/images/footballClub/2.png',
           description: 'Home page'
         }),
         new Image(2,
           { // modal
             img: '../../assets/images/footballClub/3.png',
             description: 'Add new player'
           }),
           new Image(3,
             { // modal
               img: '../../assets/images/footballClub/4.png',
               description: 'Players panel'
             }),
             new Image(64,
               { // modal
                 img: '../../assets/images/footballClub/5.png',
                 description: 'Search players'
               }),
               new Image(5,
                 { // modal
                   img: '../../assets/images/footballClub/6.png',
                   description: 'Add new matches'
                 }),
                 new Image(6,
                   { // modal
                     img: '../../assets/images/footballClub/7.png',
                     description: 'Matches panel'
                   }),
                   new Image(7,
                     { // modal
                       img: '../../assets/images/footballClub/8.png',
                       description: 'Search matches'
                     }),
                     new Image(8,
                      { // modal
                        img: '../../assets/images/footballClub/9.png',
                        description: 'Edit match'
                      })
     ],[],"MySQL",["JDBC"],"../../assets/images/footballClub/2.png"),new Project("Mobile shop",['HTML','CSS', 'JavaScript','PHP'],"This web application represents e-commerce which offers mobile phones to users. Application offers authentication, as well as possibilities to add new phones, new packages and new contracts for admins, and also options to view those phones, packages and contracts for non-admin users. Registered users can also buy phones. There is search option which offers users option to find phones by name, price, ram memory and camera resolution. Application's style was created using java script,  bootstrap and html, while backend was made using php and flight framework. This project is realised as collaboration of three people.","https://github.com/NikolaRadivojevic97/elektronska_prodavnica",[new Image(0,
     { // modal
       img: '../../assets/images/mobileShop/1.png',
       description: 'Home page'
     }), new Image(1,
       { // modal
         img: '../../assets/images/mobileShop/2.png',
         description: 'Home page'
       }),
       new Image(2,
         { // modal
           img: '../../assets/images/mobileShop/3.png',
           description: 'Login dropdown'
         }),
         new Image(3,
           { // modal
             img: '../../assets/images/mobileShop/4.png',
             description: 'Mobile phone search'
           }),
           new Image(6,
             { // modal
               img: '../../assets/images/mobileShop/5.png',
               description: 'Mobile phone specification'
             }),
             new Image(7,
               { // modal
                 img: '../../assets/images/mobileShop/6.png',
                 description: 'Cart'
               }),
               new Image(8,
                 { // modal
                   img: '../../assets/images/mobileShop/7.png',
                   description: 'Admin panel'
                 }),
                 new Image(9,
                   { // modal
                     img: '../../assets/images/mobileShop/8.png',
                     description: 'Contracts overview'
                   }),
                   new Image(10,
                     { // modal
                       img: '../../assets/images/mobileShop/9.png',
                       description: 'Statistics'
                     }),
                     new Image(11,
                       { // modal
                         img: '../../assets/images/mobileShop/10.png',
                         description: 'Location'
                       })
   ],["Flight"],"MySQL",["Bootstrap"],"../../assets/images/mobileShop/2.png"),

    ]

    getProject(title:string){
        let projekat:Project=null;
        this.projekti.forEach(element => {
            if(element.title===title){
              // console.log(title);
              console.log(element)
                projekat=element;
            }
        });
        return projekat;
    }
    getAllProjects(){
      return this.projekti;
    }
}
