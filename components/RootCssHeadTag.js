import Head from "next/head";
import {getRootCss} from "@tim-stuff/get-root-css";

// component takes the theme defined in Javascript for styled-components and generates CSS global variables
// that can then be used in any *.module.css files in order to maintain a single definition of the styles
// making them available in both CSS and JS files.

const RootCssHeadTag = ({theme}) => {

    return (
        <Head>
            <style>
                {` ${getRootCss(theme,"theme")} `}
            </style>
        </Head>
    );
}

export default RootCssHeadTag;