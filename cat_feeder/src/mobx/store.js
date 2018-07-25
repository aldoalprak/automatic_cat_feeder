import { observable } from 'mobx'

class mobxStore {

    @observable state = {
        modeStatus: false
    }

}

export default Store = new mobxStore()