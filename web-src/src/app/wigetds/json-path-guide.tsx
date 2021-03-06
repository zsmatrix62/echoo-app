// @flow
import * as React from 'react';
import "./json-path-guide.scss"
import {Space} from "@douyinfe/semi-ui";

export const JsonPathGuide = () => {
    return (
        <Space style={{overflowY: "scroll", display: 'flex', flexDirection: "column"}}>
            <>
                <h2>Operators</h2>
                <table>
                    <thead>
                    <tr>
                        <th align="left">Operator</th>
                        <th align="left">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td align="left"><code>$</code></td>
                        <td align="left">The root element to query. This starts all path expressions.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>@</code></td>
                        <td align="left">The current node being processed by a filter predicate.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>*</code></td>
                        <td align="left">Wildcard. Available anywhere a name or numeric are required.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>..</code></td>
                        <td align="left">Deep scan. Available anywhere a name is required.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>.&lt;name&gt;</code></td>
                        <td align="left">Dot-notated child</td>
                    </tr>
                    <tr>
                        <td align="left"><code>['&lt;name&gt;' (, '&lt;name&gt;')]</code></td>
                        <td align="left">Bracket-notated child or children</td>
                    </tr>
                    <tr>
                        <td align="left"><code>[&lt;number&gt; (, &lt;number&gt;)]</code></td>
                        <td align="left">Array index or indexes</td>
                    </tr>
                    <tr>
                        <td align="left"><code>[start:end]</code></td>
                        <td align="left">Array slice operator</td>
                    </tr>
                    <tr>
                        <td align="left"><code>[?(&lt;expression&gt;)]</code></td>
                        <td align="left">Filter expression. Expression must evaluate to a boolean value.</td>
                    </tr>
                    </tbody>
                </table>
            </>
            <>
                <h2>Filter Operators</h2>
                <table>
                    <thead>
                    <tr>
                        <th align="left">Operator</th>
                        <th align="left">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td align="left">==</td>
                        <td align="left">left is equal to right (note that 1 is not equal to '1')</td>
                    </tr>
                    <tr>
                        <td align="left">!=</td>
                        <td align="left">left is not equal to right</td>
                    </tr>
                    <tr>
                        <td align="left">&lt;</td>
                        <td align="left">left is less than right</td>
                    </tr>
                    <tr>
                        <td align="left">&lt;=</td>
                        <td align="left">left is less or equal to right</td>
                    </tr>
                    <tr>
                        <td align="left">&gt;</td>
                        <td align="left">left is greater than right</td>
                    </tr>
                    <tr>
                        <td align="left">&gt;=</td>
                        <td align="left">left is greater than or equal to right</td>
                    </tr>
                    <tr>
                        <td align="left">=~</td>
                        <td align="left">left matches regular expression [?(@.name =~ /foo.*?/i)]</td>
                    </tr>
                    <tr>
                        <td align="left">in</td>
                        <td align="left">left exists in right [?(@.size in ['S', 'M'])]</td>
                    </tr>
                    <tr>
                        <td align="left">nin</td>
                        <td align="left">left does not exists in right</td>
                    </tr>
                    <tr>
                        <td align="left">subsetof</td>
                        <td align="left">left is a subset of right [?(@.sizes subsetof ['S', 'M', 'L'])]</td>
                    </tr>
                    <tr>
                        <td align="left">anyof</td>
                        <td align="left">left has an intersection with right [?(@.sizes anyof ['M', 'L'])]</td>
                    </tr>
                    <tr>
                        <td align="left">noneof</td>
                        <td align="left">left has no intersection with right [?(@.sizes noneof ['M', 'L'])]</td>
                    </tr>
                    <tr>
                        <td align="left">size</td>
                        <td align="left">size of left (array or string) should match right</td>
                    </tr>
                    <tr>
                        <td align="left">empty</td>
                        <td align="left">left (array or string) should be empty</td>
                    </tr>
                    </tbody>
                </table>
            </>
        </Space>
    );
}