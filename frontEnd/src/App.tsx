import { Provider } from 'react-redux'
import { FormTodoCategory } from './components/forms/formTodoCategory'
import { PageTodoCategory } from './components/pageTodoCategory'
import { store } from './store/store'
export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <FormTodoCategory />
      </div>
      <div>
        <PageTodoCategory />
      </div>
    </Provider>
  )
}
