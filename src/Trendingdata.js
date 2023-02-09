import React from 'react'
import TrendingImage from './TrendingImage'

export default function Trending() {

let movie=
[{
    name:"karagar",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/20/1674212648404_1098x1626_karagar_2_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"cheeni",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/31/1675168296068_cheeni_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"hostel days",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/18/1674016160294_hostel_days_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"Manojder Adbhut Bari",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/12/1673521427361_manojderadbhutbari_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"Cholo Paltai",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/07/7/1657170670237_cholo_paltai_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"Byadh",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/12/22/1671732666001_byadh_1098x1626_fef_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"Ballavpurer Rupkotha",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/17/1673951399134_bprk_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"Shobdo Jobdo",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/11/9/1668000281030_shobdo_jobdo_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{  name:"Phoring",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2023/01/13/1673595460171_phoring_1098x16261_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{
  name:"Byomkesh",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/12/17/1671270597887_byomkesh_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{
  name:"Tasher Ghar",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/06/28/1656392566056_tasherghawr_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
},
{
  name:"Durgesh Garer Guptodhan",
  link:"https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/11/25/1669378059557_durgeshgarerguptadhon1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444"
}
  ]
  return (
    <TrendingImage movie= {movie}/>
  )
}