# deploily-ui-components

Reusable Component Library for the **Deploily** frontend.

---

## 🚀 Setup Instructions

### 1. Create Repository  
Create a new GitHub repository named:`deploily-ui-components`


### 2. Clone Repository  
Clone the newly created repository using:

```bash
git clone https://github.com/deploily/deploily-ui-components.git
```
### 3. Add Dev Container (Optional)
If you're using a development container (e.g., with VS Code), configure it by adding a .devcontainer folder to the root of the project.

### 4. Install React & dependencies

Install React and ReactDOM with:
```
npm install react react-dom
```

# 📁 Project Structure

## Create Components Directory
Create a folder named components in the root of your project. This is where you'll store your reusable components.

## Add the Following Files to the Project Root

`index.ts`
```
export { default as YourComponent } from './components/yourComponent';
```

`tsconfig.json`
```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "*": ["*"]
    }
  },
  "include": ["components", "index.ts"]
}
```

`.gitignore`
```
node_modules
dist
```


## Add submodule in your nextjs project 
