// ==Bookmarklet==
// @name editable-translator
// @author azu
// ==/Bookmarklet==
declare global {
    interface Window {
        googleTranslateElementInit: any;
        google: any;
    }
}

export function run() {
    window.googleTranslateElementInit = function googleTranslateElementInit() {
        new window.google.translate.TranslateElement(
            {
                autoDisplay: true,
                multilanguagePage: true
            },
            "google_translate_element"
        );
    };
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    googleTranslateScript.onload = () => {
        // Automatic translate
        setTimeout(() => {
            translate();
        }, 1000);
    };
    document.body.appendChild(googleTranslateScript);
    // onChangeURL
    const translate = () => {
        // title
        const title = document.querySelector("title");
        title && title.classList.add("notranslate");
        // pre tag
        Array.from(document.querySelectorAll("pre"), (pre) => {
            pre.classList.add("notranslate");
        });
        const iframe = document.querySelector(".goog-te-banner-frame") as HTMLIFrameElement;
        if (!iframe) {
            return;
        }
        const confirmButton = iframe.contentWindow?.document.querySelector(`button[id=":0.confirm"]`);
        if (!confirmButton) {
            return;
        }
        // @ts-ignore
        confirmButton.click();
        return true;
    };
    const restoreTranslate = () => {
        const iframe = document.querySelector(".goog-te-banner-frame") as HTMLIFrameElement;
        if (!iframe) {
            return;
        }
        const confirmButton = iframe.contentWindow?.document.querySelector(`button[id=":0.restore"]`);
        if (!confirmButton) {
            return;
        }
        // @ts-ignore
        confirmButton.click();
        return true;
    };
    const events = new EventTarget();
    events.addEventListener("edit", () => {
        enterEditMode();
    });
    events.addEventListener("leave", () => {
        leaveEditMode();
    });
    const enterEditMode = () => {
        document.body.contentEditable = "true";
        restoreTranslate();
    };
    const leaveEditMode = () => {
        document.body.contentEditable = "false";
        translate();
    };
    // Double Click → Edit mode
    document.body.addEventListener("dblclick", () => {
        events.dispatchEvent(new CustomEvent("edit"));
    });
    // Esc → Restore mode
    document.body.addEventListener("keydown", (event) => {
        if (event.key === "Escape" || event.key === "Esc") {
            events.dispatchEvent(new CustomEvent("leave"));
        }
    });
    // Bootstrap
    translate();
}
