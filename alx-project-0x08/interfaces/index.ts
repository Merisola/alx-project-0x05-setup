import {ReactNode} from "react";


// This interface is used in Layout.tsx to allow components(children) inside Layout
export interface ReactComponentProps {
    children: ReactNode;
}

// This interface defines the structure of an image card's props
export interface GeneratedImageProps {
    imageUrl: string; //The URL of the image
    prompt: string; // The prompt used to generate the image
    width?: string; // Optional width (used for styling)
    height?: string; // Optional height(used for styling)
    action: (imagePath:string) => void; //Funtion to run when image is clicked

}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">;