//Current data for application saved as an array of objects

var friendsArray = [
        {
        name:"Aang",
        imgLink:"https://vignette.wikia.nocookie.net/avatar/images/c/ce/Aang_meditates.png/revision/latest?cb=20121119085519",
        scores:[
            5,
            1,
            5,
            5,
            4,
            2,
            1,
            3,
            5,
            5
            ]
        },
        {
          name:"Sokka",
          imgLink:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-avatar-the-last-airbender-jack-de-sena.jpg",
          scores:[
              5,
              5,
              2,
              2,
              1,
              3,
              1,
              1,
              4,
              4
              ]
          },
          {
            name:"Toph",
            imgLink:"https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047",
            scores:[
                2,
                5,
                3,
                3,
                1,
                5,
                5,
                1,
                1,
                1
                ]
            }, 
          {
              name:"Katara",
              imgLink:"https://vignette.wikia.nocookie.net/avatar/images/7/7a/Katara_smiles_at_coronation.png/revision/latest?cb=20150104171449",
              scores:[
                  2,
                  4,
                  4,
                  5,
                  1,
                  3,
                  3,
                  5,
                  5,
                  1
                  ]
              },
              {
                name:"Iroh",
                imgLink:"https://vignette.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png/revision/latest?cb=20130626131914",
                scores:[
                    5,
                    1,
                    5,
                    2,
                    3,
                    3,
                    5,
                    5,
                    5,
                    5
                    ]
                },
                {
                  name:"Appa",
                  imgLink:"https://vignette.wikia.nocookie.net/avatar/images/6/65/Appa_flying.png/revision/latest?cb=20140517110636",
                  scores:[
                      3,
                      3,
                      3,
                      3,
                      3,
                      3,
                      1,
                      1,
                      5,
                      1
                      ]
                  },
                  {
                    name:"Azula",
                    imgLink:"https://vignette.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest?cb=20140905084941",
                    scores:[
                        1,
                        5,
                        1,
                        1,
                        5,
                        1,
                        1,
                        1,
                        1,
                        5
                        ]
                    },
                    {
                      name:"Momo",
                      imgLink:"https://vignette.wikia.nocookie.net/avatar/images/4/43/Inquisitive_Momo.png/revision/latest?cb=20081225191217",
                      scores:[
                          5,
                          5,
                          5,
                          5,
                          5,
                          2,
                          1,
                          1,
                          5,
                          5
                          ]
                      },
                      {
                        name:"Ozai",
                        imgLink:"https://vignette.wikia.nocookie.net/avatar/images/4/4a/Ozai.png/revision/latest?cb=20130612170743",
                        scores:[
                            1,
                            5,
                            5,
                            1,
                            1,
                            5,
                            1,
                            1,
                            1,
                            1
                            ]
                        },
                        {
                          name:"Zuko",
                          imgLink:"https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142",
                          scores:[
                              2,
                              4,
                              2,
                              5,
                              1,
                              5,
                              4,
                              2,
                              4,
                              4
                              ]
                          }               
                                  
      ]



/*
Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.
*/


//for (var i = 0; i<friendsArray.length; i++){
//  console.log(friendsArray[i].scores);
//}

module.exports = friendsArray;