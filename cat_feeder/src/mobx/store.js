import { observable, action } from 'mobx'

class mobxStore {

    @observable state = {
        modeStatus: false,
        isDateTimePickerVisible: false,
        isDateTimePickerVisible2: false,
        timeMorning: "",
        timeEvening: ""
    }

    @action
    _showDateTimePicker() {
        // alert("hello")
        this.state.isDateTimePickerVisible = true
    }

    _showDateTimePicker2() {
        this.state.isDateTimePickerVisible2 = true
    }

    _hideDateTimePicker() {
        this.state.isDateTimePickerVisible = false
    }

    _hideDateTimePicker2() {
        this.state.isDateTimePickerVisible2 = false
    }

    statusChange() {
        if (!this.state.modeStatus) {
            this.state.modeStatus = true
        } else {
            this.state.modeStatus = false
        }
    }


}

export default Store = new mobxStore()