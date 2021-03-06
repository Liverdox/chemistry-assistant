export default function SettingBackground({ color, active, setProps, cls }) {
    return(
        <li className={"setting-background " + cls} style={{backgroundColor: color.background}} onClick={setProps}>
            <svg version="1.1"  height="15px" x="0px" viewBox="0 0 900 900" y="0px" style={{display: active ? "block" : "none"}}>
                <path style={{fill: "#fff"}} d="M561.5,51.5c15.3,15.5,15.3,40.8,0,56.3c0,0-326.3,332.8-331.5,338c-15.3,15.5-40,15.5-55.3,0c0,0-125.1-127.6-125.5-128c-14.1-15.6-13.7-40,1.2-55.1c15.2-15.6,40-15.6,55.2,0l96.7,98.6L506.3,51.5C521.5,36,546.2,36,561.5,51.5z" />
                <path d="M589.1,23.3c30.5,31.1,30.5,81.6,0,112.7l-331.4,338c-30.5,31.1-80,31.1-110.5,0L22.9,347.3c-30.5-31.1-30.5-81.6,0-112.7c30.5-31.1,80-31.1,110.5,0l69.1,70.4L478.6,23.3C509.1-7.8,558.6-7.8,589.1,23.3z M561.5,107.9c15.3-15.6,15.3-40.8,0-56.3c-15.3-15.6-40-15.6-55.3,0L202.4,361.4l-96.7-98.6c-15.3-15.6-40-15.6-55.2,0c-14.9,15.2-15.3,39.5-1.2,55.1c0.4,0.4,125.5,128,125.5,128c15.3,15.5,40,15.5,55.3,0C235.2,440.7,561.5,107.9,561.5,107.9z" />
            </svg>
        </li>
    );
}