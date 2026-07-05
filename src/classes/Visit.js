class Visit {
    constructor(full_name, date, time, meeting_host) {
        this._full_name = full_name;
        this._date = date;
        this._time = time;
        this._meeting_host = meeting_host;
    }

    get full_name() {
        return this._full_name;
    }

    get date() {
        return this._date;
    }

    get time() {
        return this._time;
    }

    get meeting_host() {
        return this._meeting_host;
    }

    toString() {
        return `Individual named ${this.full_name} has a meeting scheduled for ${this.date} at ${this.time} with host ${this.meeting_host}`;
    }
}

export default Visit;