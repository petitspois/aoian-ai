import { type Registry } from "shadcn/registry"

import { registryUrl } from "@/lib/utils"

export const examples: Registry["items"] = [
  {
    name: "bubble-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-placement-avatar",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-placement-avatar.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-layout",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble"), "button"],
    files: [
      {
        path: "registry/examples/bubble-layout.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-loading",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-loading.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-typing",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble"), "button"],
    files: [
      {
        path: "registry/examples/bubble-typing.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-content-render",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    dependencies: ["markdown-it"],
    files: [
      {
        path: "registry/examples/bubble-content-render.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-variant",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-variant.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-shape",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-shape.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-list-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-list-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "loading-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("loading")],
    files: [
      {
        path: "registry/examples/loading-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
