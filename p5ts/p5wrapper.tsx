import * as p5 from "p5";
import * as React from "react";
import { useRef, createRef, RefObject } from "react";

export interface IProps {
  sketch: (sketch: p5) => void;
  onP5Changed?: (sketch: p5) => void;
}

export default class P5Wrapper extends React.Component<IProps, {}> {
  public canvas: p5;
  // private wrapper: React

  private wrapper = React.createRef<HTMLCanvasElement>();
  // private wrapper: React.useRef<HTMLDivElement> = React.createRef();
  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    this.setSketch(this.props);
  }

  public componentWillReceiveProps(newprops: IProps) {
    if (this.props.sketch !== newprops.sketch) {
      this.setSketch(newprops);
    }
  }

  public render() {
    return <div ref={this.wrapper} />;
  }

  private setSketch(props: IProps) {
    const current = this.wrapper.current;
    if (current) {
      if (current.childNodes[0]) {
        current.removeChild(current.childNodes[0]);
      }
      this.canvas = new p5(props.sketch, current);
      if (props.onP5Changed) {
        props.onP5Changed(this.canvas);
      }
    }
  }
}
