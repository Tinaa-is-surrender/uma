const ThreeStars = [
    "Special Week",
    "Special Week (Summer)",
    "Silence Suzuka",
    "Tokai Teio",
    "Tokai Teio (Anime Collab)",
    "Maruzensky",
    "Maruzensky (Summer)",
    "Fuji Kiseki",
    "Oguri Cap",
    "Taiki Shuttle",
    "Grass Wonder (Fantasy)",
    "Hishi Amazon",
    "Mejiro McQueen",
    "Mejiro McQueen (Anime Collab)",
    "El Condor Pasa (Fantasy)",
    "TM Opera O",
    "Narita Brian",
    "Symboli Rudolf",
    "Symboli Rudolf (Festival)",
    "Air Groove (Wedding)",
    "Agnes Digital",
    "Seiun Sky",
    "Biwa Hayahide",
    "Mayano Top Gun (Wedding)",
    "Manhattan Cafe",
    "Mihono Bourbon",
    "Hishi Akebono",
    "Rice Shower",
    "Rice Shower (Halloween)",
    "Eishin Flash",
    "Curren Chan",
    "Kawakami Princess",
    "Gold City",
    "Gold City (Festival)",
    "Super Creek (Haloween)",
    "Smart Falcon",
    "Tosen Jordan",
    "Narita Taishin",
    "Matikanefukukitaru (Full Armor)",
    "Meisho Doto",
    "Mejiro Dober"
]
const TwoStars = [
    "Gold Ship",
    "Vodca",
    "Daiwa Scarlet",
    "Grass Wonder",
    "El Condor Pasa",
    "Air Groove",
    "Mayano Top Gun",
    "Super Creek"
]
const OneStar = [
    "Mejiro Ryan",
    "Agnes Tachyon",
    "Winning Ticket",
    "Sakura Bakushin O",
    "Haru Urara",
    "Matikanefukukitaru",
    "Nice Nature",
    "King Halo"
]
const Pickup = ["Oguri Cap (Christmas)", "Biwa Hayahide (Christmas)"]

function RandomNumGen() {
    let RandomNum = Math.floor(Math.random() * 10000) + 1;
    return RandomNum;
}

function gachaStars() {
    const number = RandomNumGen();
    if (number > 9700) {
        return {
            stars: 3,
            number: number
        }
    } else if (number <= 9700 && number > 7800) {
        return {
            stars: 2,
            number: number
        }
    } else if (number <= 7800) {
        return {
            stars: 1,
            number: number
        }
    }
}

function gachaStars2() {
    const number = RandomNumGen();
    if (number > 9700) {
        return {
            stars: 3,
            number: number
        }
    } else if (number <= 9700) {
        return {
            stars: 2,
            number: number
        }
    }
}

function GachaSimulator() {
    let info = gachaStars();
    if (info.stars == 3) {
        if (info.number > 9850) {
            if (info.number >= 9925) {
                return {
                    result: Pickup[0],
                    stars: info.stars
                }
            } else {
                return {
                    result: Pickup[1],
                    stars: info.stars
                }
            }
        } else {
            return {
                result: ThreeStars[Math.floor(Math.random() * 41)],
                stars: info.stars
            }
        }
    } else if (info.stars == 2) {
        return {
            result: TwoStars[Math.floor(Math.random() * 8)],
            stars: info.stars
        }
    } else {
        return {
            result: OneStar[Math.floor(Math.random() * 8)],
            stars: info.stars
        }
    }
}

function GachaSimulator2() {
    let info = gachaStars2();
    if (info.stars == 3) {
        if (info.number > 9850) {
            if (info.number >= 9925) {
                return {
                    result: Pickup[0],
                    stars: info.stars
                }
            } else {
                return {
                    result: Pickup[1],
                    stars: info.stars
                }
            }
        } else {
            return {
                result: ThreeStars[Math.floor(Math.random() * 41)],
                stars: info.stars
            }
        }
    } else if (info.stars == 2) {
        return {
            result: TwoStars[Math.floor(Math.random() * 8)],
            stars: info.stars
        }
    }
}

function RunGachaSimulator() {
    console.log("================= 10연뽑 결과 ===================")
    for (var i = 1; i <= 9; i++) {
        let result = GachaSimulator();
        console.log(result.result + " | Stars: " + result.stars);
    }
    let result = GachaSimulator2();
    console.log(result.result + " | Stars: " + result.stars);
}

RunGachaSimulator();

