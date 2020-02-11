const helpers = {
    clean(data) {
        console.log(data,this)
        const cleanData = {
            tagline:{
                now: this.format.fckyou(data.currently.icon),
                today: this.format.fckyou(data.daily.icon)
            }
        }
        return cleanData
    }
}

export {helpers}