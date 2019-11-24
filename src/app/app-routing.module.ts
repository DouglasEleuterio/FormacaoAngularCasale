import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes} from './tarefas';

export const routes: Routes = [
  {
    path: '', // Caso a url seja vazia (localhos:8080) ele redireciona para /tarefas/listar.
    redirectTo: '/tarefas/listar', // Redirecionamento.
    pathMatch: 'full' // Para exibir a url completa
  },
  ...TarefaRoutes // Concatenacao de Array do Typescript, a ideia e:
                  // concatenar o endereco da rota principal com a rota de tarefas.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
