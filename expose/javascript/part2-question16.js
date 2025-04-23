let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(let statistic in statistics){
    if(statistics[statistic]%2===1 || statistic[0]==='r'){
        console.log(statistics[statistic])
    }
}