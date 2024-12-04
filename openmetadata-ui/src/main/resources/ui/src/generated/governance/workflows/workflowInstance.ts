/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 /**
 * Defines a workflow instance.
 */
export interface WorkflowInstance {
    /**
     * Timestamp on which the workflow instance ended.
     */
    endedAt?: number;
    /**
     * If the Workflow Instance has errors, 'True'. Else, 'False'.
     */
    exception?: boolean;
    /**
     * Unique identifier of this workflow instance state.
     */
    id?: string;
    /**
     * Timestamp on which the workflow instance started.
     */
    startedAt?: number;
    /**
     * Timestamp on which the workflow instance state was created.
     */
    timestamp?: number;
    variables?: { [key: string]: any };
    /**
     * Workflow Definition Id.
     */
    workflowDefinitionId?: string;
}