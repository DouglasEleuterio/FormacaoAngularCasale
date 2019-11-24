import {Routes} from '@angular/router';
import {ListarTarefaComponent} from './listar';

export const TarefaRoutes: Routes = [
  {
    // Redireciona a url /tarefas para tarefas/listar.T
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  }
];
