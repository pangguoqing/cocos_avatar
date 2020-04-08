import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum Sex{
    MALE,
    FEMALE,
};

@ccclass("AvatarSys")
export class AvatarSys extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
    }

    getInfo () {
        // 基本信息
        let avatarInfo = cc.sys.localStorage.getItem('avatar_info');
        // 男性穿着信息
        let avatarDressInfoOfMale = cc.sys.localStorage.getItem('avatar_dress_info_male');
        // 女性穿着信息
        let avatarDressInfoOfFemale = cc.sys.localStorage.getItem('avatar_dress_info_female');
        if (!avatarInfo) {
            return {
                'sex': Sex.FEMALE,
            }
        }
    }

    

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
