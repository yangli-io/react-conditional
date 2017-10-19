## react-conditional

instead of

```jsx
class Banner extends Component {
    render() {
        return <div>
            { if (this.props.test) ? <span>Hello World</span> : null }
        </div>
    }
}
```

use

```jsx
class Banner extends Component {
    render() {
        return <div>
            <WhatIf test={this.props.test}>
                <span>Hello World</span>
            </WhatIf>
        </div>
    }
}
```


instead of

```jsx
class Banner extends Component {
    render() {
        return <div>
            { if (this.props.test) ? <span>Hello World</span> : <span>GoodBye World</span> }
        </div>
    }
}
```

use

```jsx
class Banner extends Component {
    render() {
        return <div>
            <WhatIf test={this.props.test}>
                <span>Hello World</span>
            </WhatIf>
            <WhatIf test={!this.props.test}>
                <span>Goodbye World</span>
            </WhatIf>
        </div>
    }
}
```