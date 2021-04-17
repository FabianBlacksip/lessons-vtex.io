# Size Guide

The `example-2` is the block is responsible show the seller information

![image](https://user-images.githubusercontent.com/17678382/115098788-993db180-9ef7-11eb-8b1e-4bb45aef7e3e.png)

## Configuration

1. Import the `blacksipqa.example-2` app to your theme's dependencies in the `manifest.json`, for example:

```json
{
    "dependencies": {
        "blacksipqa.example-2": "0.x"
    }
}
```

2. Add the `example-2` block to any block below `store.home`. For example:

```json
{
    "store.home": {
        "blocks": ["example-2"]
    }
}
```

| Prop name | Type     | Description | Default value  |
| --------- | -------- | ----------- | -------------- |
| `label`   | `String` | Label text  | `Vendido por:` |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles             |
| ----------------------- |
| `labelSeller`           |
| `sellerName`            |
| `sellerPolicyExchanges` |
