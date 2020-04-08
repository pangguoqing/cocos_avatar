import { _decorator, Component, Node, loader, Prefab, instantiate, director, v3, Quat } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerController")
export class PlayerController extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        this.loadBody();
    }

    loadBody () {
        loader.loadRes("cocos/Cocos", Prefab , (err: any, prefab: Prefab) => {
            console.log(111, prefab)
            const newNode = instantiate(prefab);
            newNode.copy
            console.log(222, newNode)
            // console.log(333, newNode.getPosition())
            // newNode.setPosition(v3(0, 2, 0))
            console.log(444, newNode.getRotation())
            newNode.setRotation(new Quat(0, 0.1, 0))
            console.log(newNode.getComponentsInChildren('Helmet'))
            console.log(newNode.children)
            newNode.children[0].active = true;
            // director.getScene().addChild(newNode);
        });
    }

    clone () {
        // var scene = cc.director.getScene();
        // var node = cc.instantiate(targetNode);
        // node.parent = scene;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
