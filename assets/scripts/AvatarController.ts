import { _decorator, Component, Node, loader, SpriteFrame, SkinningModelComponent, Texture2D, systemEvent, SystemEvent, EventTouch, Vec3, math, tween, SliderComponent } from "cc";
const { ccclass, property } = _decorator;


enum Sex {
    MALE = 1,
    FEMALE = 2,
};

interface DressInfo {
    kind?: string | number,
    sub?: string | number
}

interface Avatar {
    [part: string]: DressInfo,
    // hair: DressInfo,
    // face: DressInfo,
    // eyes: DressInfo,
    // top: DressInfo,
    // pants: DressInfo,
    // shoes: DressInfo
}

@ccclass("AvatarController")
export class AvatarController extends Component {
    /* class member could be defined like this */
    // dummy = '';

    @property({type: Node})
    public female: Node = null;

    @property({type: Node})
    public male: Node = null;

    @property({ type: Node })
    readonly camera: Node = null;

    @property({ type: Node })
    readonly nFacePanel: Node = null;

    @property({ type: Node })
    readonly nDressPanel: Node = null;

    private sex: Sex;
    private avatar: Avatar;
    private target: Node;

    private hairIndex: number = 0;
    private faceIndex: number = 0;
    private eyesIndex: number = 0;
    private topIndex: number = 0;
    private pantsIndex: number = 0;
    private shoesIndex: number = 0;

    private rotationInNDress: math.Quat;

    /**
     * 换发型
     */
    public dressHair() {
        const infos: DressInfo[] = [{kind:1, sub: 'brown'}, {kind:1, sub: 'normal'},{kind:1, sub: 'red'},{kind:1, sub: 'yellow'},{kind:2, sub: 'cyan'},{kind:2, sub: 'dark'},{kind:2, sub: 'pink'}]
        this.hairIndex = (this.hairIndex >= infos.length - 1) ? -1 : this.hairIndex;
        const index = ++this.hairIndex;
        this.dress('hair', infos[index]);
    }
    /**
     * 换脸型
     */
    public dressFace() {
        const infos: DressInfo[] = [{kind:1}, {kind:1, sub: 'normal'},{kind:2}, {kind:2, sub: 'normal'}]
        this.faceIndex = (this.faceIndex >= infos.length - 1) ? -1 : this.faceIndex;
        const index = ++this.faceIndex;
        this.dress('face', infos[index]);
    }
    /**
     * 换眼睛
     */
    public dressEyes() {
        const infos: DressInfo[] = [{sub: 'brown'},{sub: 'blue'},{sub: 'green'}]
        this.eyesIndex = (this.eyesIndex >= infos.length - 1) ? -1 : this.eyesIndex;
        const index = ++this.eyesIndex;
        this.dress('eyes', infos[index]);
    }
    /**
     * 换上衣
     */
    public dressTop() {
        const infos: DressInfo[] = [{kind:1, sub: 'blue'},{kind:1, sub: 'green'},{kind:1, sub: 'pink'}, {kind:1, sub: 'normal'},{kind:2, sub: 'orange'},{kind:2, sub: 'green'},{kind:2, sub: 'purple'}, {kind:2, sub: 'normal'}]
        this.topIndex = (this.topIndex >= infos.length - 1) ? -1 : this.topIndex;
        const index = ++this.topIndex;
        this.dress('top', infos[index]);
    }
    /**
     * 换裤子
     */
    public dressPants() {
        const infos: DressInfo[] = [{kind:1, sub: 'blue'},{kind:1, sub: 'green'},{kind:1, sub: 'dark'}, {kind:1, sub: 'normal'},{kind:2, sub: 'orange'},{kind:2, sub: 'blue'},{kind:2, sub: 'black'}, {kind:2, sub: 'normal'}]
        this.pantsIndex = (this.pantsIndex >= infos.length - 1) ? -1 : this.pantsIndex;
        const index = ++this.pantsIndex;
        this.dress('pants', infos[index]);
    }
    /**
     * 换鞋
     */
    public dressShoes() {
        const infos: DressInfo[] = [{kind:1, sub: 'blue'},{kind:1, sub: 'green'},{kind:1, sub: 'yellow'}, {kind:1, sub: 'normal'},{kind:2, sub: 'yellow'},{kind:2, sub: 'blue'},{kind:2, sub: 'red'}, {kind:2, sub: 'normal'}]
        this.shoesIndex = (this.shoesIndex >= infos.length - 1) ? -1 : this.shoesIndex;
        const index = ++this.shoesIndex;
        this.dress('shoes', infos[index]);
    }
    /**
     * 切到捏脸
     */
    public switchToNFace() {
        // tween(this.camera)
        //     .to(0.4, { position: new Vec3(0, 0.6, -1.5) }, { easing: 'smooth' })
        //     .start();
        tween(this.target)
            .to(0.4, { rotation: new math.Quat(0, 0, 0, 1) }, { easing: 'linear' })
            .start();
        this.camera.setPosition(new Vec3(0, 0.6, -1.5));
        this.rotationInNDress = this.target.getRotation();
        // this.target.setRotation(new math.Quat(0, 0, 0 ,1));
        this.nFacePanel.active = true;
        this.nDressPanel.active = false;
    }
    /**
     * 切到换装
     */
    public switchToNDress() {
        // tween(this.camera)
        //     .to(0.4, { position: new Vec3(0, 0, 0) }, { easing: 'smooth' })
        //     .start();
        tween(this.target)
            .to(0.4, { rotation: this.rotationInNDress }, { easing: 'linear' })
            .start();
        this.camera.setPosition(new Vec3(0, 0, 0));
        // this.target.setRotation(this.rotationInNDress);
        this.nFacePanel.active = false;
        this.nDressPanel.active = true;
    }
    /**
     * 捏下巴
     * @param slider 滑杆
     */
    public nJaw(slider: SliderComponent){
        const jaw = this.target.children[0].children[10].children[0].children[0].children[0].children[0].children[7];
        jaw.setPosition({...jaw.position, x: 0.0006415533716790378 + 0.00008 * (slider.progress - 0.7) * 2})
    }

    public nCheck(slider: SliderComponent){
        const cheekRight = this.target.children[0].children[10].children[0].children[0].children[0].children[0].children[2];
        const cheekLeft = this.target.children[0].children[10].children[0].children[0].children[0].children[0].children[8];
        cheekRight.setPosition({...cheekRight.position, x: 0.00104265206027776 + 0.0002 * (slider.progress - 0.7) * 2})
        cheekLeft.setPosition({...cheekLeft.position, x: 0.0010417031589895487 + 0.0002 * (slider.progress - 0.7) * 2})
    }

    private hideUnusedParts() {
        const parts = this.target.children[0].children;
        for (var i = 0; i < parts.length; i++) {
            const part = parts[i];
            console.log(part)
            if (!part.getComponent(SkinningModelComponent)) {
                continue;
            }
            const material = part.getComponent(SkinningModelComponent).materials[0];
            console.log(material.getProperty('mainTexture'))
            if (!material.getProperty('mainTexture')) {
                part.active = false;
            }
        }
    }

    start () {
        this.sex = this.getAvatarSex();
        this.avatar = this.sex === Sex.FEMALE ? this.getAvatarFemaleInfo() : this.getAvatarMaleInfo();
        this.target = this.sex === Sex.FEMALE ? this.female : this.female;
        window.camera = this.camera
        this.dressAll().then(() => {
            this.target.active = true;
            // [bug fixed] 关闭useBakedAnimation之后,从模型A切换到模型B时，模型B动画会卡住。这里处理的方法是在加载人物时默认所有的模型都是active状态，等加载完毕时再讲不需要展示的模型隐藏。隐藏需要异步进行，否则仍然会卡。
            setTimeout(()=>{
                this.hideUnusedParts();
            })
        });
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_MOVE,this.onMouseMove,this);
    }
    /**
     * 鼠标拖动操控人物旋转
     * @param event 事件对象
     */
    onMouseMove(event){
        if(event.movementX!=0){
            const up =new Vec3(0,1,0);
            const rotationx = this.target.getRotation();
            math.Quat.rotateAround(rotationx, rotationx, up, event.movementX/5/ 360.0 * 3.1415926535);
            this.target.setRotation(rotationx);
        }
    }
    /**
     * 触摸操控人物旋转
     * @param event 事件对象
     */
    onTouchMove(event){
        if(event.getDelta().x != 0){
            const up =new Vec3(0,1,0);
            const rotationx = this.target.getRotation();
            math.Quat.rotateAround(rotationx, rotationx, up, event.getDelta().x/5/ 360.0 * 3.1415926535);
            this.target.setRotation(rotationx);
        }
    }
    /**
     * 获取性别
     */
    public getAvatarSex (): Sex {
        return parseInt(cc.sys.localStorage.getItem('avatarsys_sex')) || Sex.FEMALE
    }
    /**
     * 获取女性着装信息
     */
    public getAvatarFemaleInfo (): Avatar {
        return JSON.parse(cc.sys.localStorage.getItem('avatarsys_female_info')) || {
            hair: {
                kind: 1,
                sub: 'brown'
            },
            face: {
                kind: 1
            },
            eyes: {
                sub: 'blue'
            },
            top: {
                kind: 1,
                sub: 'blue'
            },
            pants: {
                kind: 1,
                sub: 'blue'
            },
            shoes: {
                kind: 1,
                sub: 'blue'
            }
        }
    }
    /**
     * 获取男性着装信息
     */
    public getAvatarMaleInfo (): Avatar {
        return JSON.parse(cc.sys.localStorage.getItem('avatarsys_male_info')) || {
            hair: {
                kind: 1,
                sub: 'brown'
            },
            face: {
                kind: 1,
                sub: 'normal'
            },
            eyes: {
                sub: 'blue'
            },
            top: {
                kind: 1,
                sub: 'blue'
            },
            pants: {
                kind: 1,
                sub: 'blue'
            },
            shoes: {
                kind: 1,
                sub: 'blue'
            }
        }
    }
    /**
     * 整体着装
     */
    public dressAll () {
        const promises = Object.keys(this.avatar).map((part: string) => {
            return this.dress(part, this.avatar[part]);
        })
        return Promise.all(promises);
    }
    /**
     * 部位着装
     * @param part 部位
     * @param dressInfo 部位着装信息
     */
    public dress (part: string, dressInfo: DressInfo): Promise<Node> {
        const pre = this.getPart(part, this.avatar[part]);
        const current = this.getPart(part, dressInfo);
        const res: string = this.getTextureRes(part, dressInfo);
        return this.loadTexture2D(res).then((texture2D: Texture2D) => {
            const materials = current.getComponent(SkinningModelComponent).materials;
            for (var i = 0; i < materials.length; i++) {
                materials[i].setProperty('mainTexture', texture2D);
            }
            if (current !== pre) {
                pre.active = false;
                // [bug fixed] 从A模型切换到B模型时，A模型的全局旋转信息未能更新到最新。
                this.target.setRotation(this.target.getRotation());
            }
            current.active = true;
            this.avatar[part] = dressInfo;
            return current;
        })
    }
    /**
     * 获取着装部位的元素
     * @param part 部位
     * @param dressInfo 部位着装信息
     */
    public getPart (part: string, dressInfo: DressInfo): Node {
        const {kind, sub} = dressInfo
        const name = `${part}${kind?`-${kind}`:''}`
        const children: Node[] = this.target.children[0].children
        for (var i = 0; i < children.length; i++) {
            const child = children[i]
            if (child.name === name) {
                return child
            }
        }
    }
    /**
     * 获取部位相应的资源地址
     * @param part 部位
     * @param dressInfo 部位着装信息
     */
    public getTextureRes (part: string, dressInfo: DressInfo): string {
        const {kind, sub} = dressInfo
        const sex = this.sex === Sex.FEMALE ? 'Female' : 'Male'
        return `characters/${sex}/textures/${sex.toLowerCase()}_${part}${kind?`-${kind}`:''}${sub?`_${sub}`:''}/texture`
    }
    /**
     * 动态加载贴图
     * @param res 资源地址
     */
    public loadTexture2D (res) : Promise<Texture2D> {
        return new Promise((resolve, reject) => {
            loader.loadRes(res, Texture2D ,(err: any, texture2D: Texture2D) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(texture2D);
                }
            });
        })
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
